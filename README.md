## 2048 Game 

A browser-based 2048 puzzle game built with HTML, CSS & JavaScript.



## Preview 



https://github.com/user-attachments/assets/f736b39a-cae7-43cf-be5c-b23cc84002a2




## Play the Game 

Open index.html in the browser or deploy it using GitHub Pages.



## Features 

          => Classic 2048 gameplay 
          => Keyboard arrow key controls
          => Automatic tile merging and score tracking
          => Win detection when reaching 2048
          => Game Over Detection when no moves remain
          => Restart button for starting a new game
          => Color-coded tiles based on value



## Controls 

Key	       Action
↑	         Move Up
↓	         Move Down
←	         Move Left
→	         Move Right



## How it works

Board Representation 
The game board is stored as a 4x4 JavaScript array: 
[
 [0, 0, 0, 0],
 [0, 0, 0, 0],
 [0, 0, 0, 0],
 [0, 0, 0, 0]
]



## Tile Movement 

 When an arrow key is pressed 
            1. Empty Spaces are removed from the row or column.
            2. Adjacent equal values are merged.
            3. The score is updated.
            4. Empty spaces are added back.
            5. A new file(2) appears in a random empty cell.



## Winning 

The player wins when a tile reaches: 
     2048



## Game Over 

The game ends when : 
        1. No empty tiles remain.
        2. No horizontal merges are possible.
        3. No vertical merges are possible.



## Project Structure : 

                2048-game/
                     |- index.html
                     |- style.css
                     |- script.js
                     |- Readme.md



## Technologies Used 

         - HTML
         - CSS
         - JAVASCRIPT



## Future Improvements 

        => Smooth tile animations
        => Best Score persistence using Local Storage
        => Touch controls for mobile devices 
        => Undo move feature
        => Dark node theme
        => Sound Effect



## Acknowledgement 

    Inspired by the original 2048 game created by Gabriele Cirulli
