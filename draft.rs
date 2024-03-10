// This is just a draft, for demonstrating the burning logic
// Not production ready

use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint::ProgramResult,
    pubkey::Pubkey,
    program_error::ProgramError,
    msg,
};
use spl_token::state::Account as TokenAccount;
use arrayref::array_ref;

fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo], 
    instruction_data: &[u8],
) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();

    let sender_account_info = next_account_info(account_info_iter)?;
    let receiver_account_info = next_account_info(account_info_iter)?;
    let token_program = next_account_info(account_info_iter)?;
    let sender_token_account = TokenAccount::unpack(&sender_account_info.data.borrow())?;
    let burn_amount = calculate_burn_fee(sender_token_account.amount);

    if *token_program.key != spl_token::id() {
        msg!("Error: Token program provided does not match the spl token program");
        return Err(ProgramError::IncorrectProgramId);
    }

    let burn_instruction = spl_token::instruction::burn(
        token_program.key, 
        sender_account_info.key, 
        &sender_token_account.mint, 
        &sender_account_info.key, 
        &[&sender_account_info.key], 
        burn_amount, 
    )?;

    solana_program::program::invoke(
        &burn_instruction,
        &[
            sender_account_info.clone(),
            receiver_account_info.clone(),
            token_program.clone(),
        ],
    )?;

    Ok(())
}

fn calculate_burn_fee(transfer_amount: u64) -> u64 {
    (transfer_amount as f64 * 0.005).round() as u64
}
