# chaturanga
Making a web-based version of the ancient Indian chess game Chaturanga. 

# context
Chaturanga was an ancient Indian game, similar to chess. 

The name Chaturanga refers to the four divisions of an army:
1. Elephantry
2. Chariotry
3. Cavalry
4. Infantry

# features
* 8x8, visually uncheckered board
## pieces
* Raja (king)
* Mantri/Senapati (minister/general)
* Ratha (chariot)
* Gaja/Hasti (elephant)
* Asva (horse/knight)
* Padati/Bhata/Sainika (infantry/foot-soldier)

## how each piece moves
### raja
One step any direction, NO castling
### mantri/senapati
One step diagonally in any direction
### ratha
Horizontally/vertically through any number of unoccupied squares (like a rook)
### gaja/hasti
Three different moves:
1. Two squares in any diagonal direction - jumping over the first square
2. One forward step/one step in any diagonal direction
3. Two squares in any orthogonal direction - jumping over the first square
### asva
Moves like a knight in chess: L-shape
### padati/bhata/sainika 
Moves like a pawn but w/o the double step at the beginning

## other rules
Player first to bear the other's king (capture all other pieces) wins. Stalemates are(?) possible.

## next steps
* create the icons for players
* [text](https://nkarve.github.io/programming/2022/06/08/chessposition.html)
