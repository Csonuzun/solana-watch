#!/bin/sh

# Initialize metadata of the token 
# Arguments: TOKEN_MINT_ADDRESS generated by create-token.sh (5fKLeLC3wPJ1gLvcZmgTDu7eFagLUUvyJpo6kf4xLHjF for us)

spl-token initialize-metadata $1 "Solana Watch" "SOW" "https://raw.githubusercontent.com/Csonuzun/solana-watch/main/metadata.json"
