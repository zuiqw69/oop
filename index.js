    let textElement = document.getElementById('text')
    const optionButtonsElement = document.getElementById('option-buttons')
    
    let state = {}
    
    function startGame() {
      state = {}
      showTextNode(1)
    }
    
    function showTextNode(textNodeIndex) {
      const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
      textElement.innerText = textNode.text
      while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
      }
    
      textNode.options.forEach(option => {
        if (showOption(option)) {
          const button = document.createElement('button')
          button.innerText = option.text
          button.classList.add('btn')
          button.addEventListener('click', () => selectOption(option))
          optionButtonsElement.appendChild(button)
        }
      })
    }
    
    function showOption(option) {
      return option.requiredState == null || option.requiredState(state)
    }
    
    function selectOption(option) {
      const nextTextNodeId = option.nextText
      if (nextTextNodeId <= 0) {
        return startGame()
      }
      state = Object.assign(state, option.setState)
      showTextNode(nextTextNodeId)
    }
    
    const textNodes = [
      {
        id: 1,
        text: 'Its starting to poor down, a massive thunderstorm is approaching. The adventurer is looking for shelter, spotting what seems to be ruins of a castle. The abandoned castle seems to have a dark aura surrounding it.....',
        options: [
          {
            text: 'BEGIN THE ADVENTURE!',
            nextText: 2
          }

        ]
      },
      {
        id: 2,
        text: 'As the adventurer approaches closer, a shady old man passes by, he warns the adventurer of the rumors and urban legends of the ruined castle',
        options: [
          {
            text: 'Countinue towards the castle enterance',
            nextText: 3
          },
          {
            text: 'Abandon adventure',
            nextText: 14
          }
        ]
      },
      {
        id: 3,
        text: ' Venturing forth, the adventurer approaches the castle enterance.',
        options: [
          {
            text: 'ENTER CASTLE',
            nextText: 4
          },
        ]
      },
      {
        id: 4,
        text: 'As the castle doors squeaky noiese sends a shiver down the adventurers back, the adventurer finds himself in the lobby of the castle. There seems to be a sword wielding skeleton approaching  .',
        options: [
          {
            text: 'INTERACT WITH AND CHALLANGE THE ENEMY SKELETON',
            nextText: 5
          },
        ]
      },
      {
        id: 5,
        text: 'After a lengthy but rewarding fight, the adventurer defeats the skeleton, takes its sword, and rests up before entering the next available room.',
        options: [
          {
            text: 'ON TO THE NEXT ROOM',
            nextText: 6
          }
        ]
      },
      {
        id: 6,
        text: 'Entering via a worn wooden door, the room is scattered full of what seem to be shelves of potions, books, and scrolls. A fireplace on the left side, and a massive pentagram on the right side of the wall .',
        options: [
          {
            text: 'CLOSE THE DOOR BEHIND YOU',
            nextText: 7
          }
        ]
      },
      {
        id: 7,
        text: '"WELCOME STRANGER" said a noise, as a mage appeared from the shadows.',
        options: [
          {
            text: 'INTERACT WITH AND CHALLANGE THE ENEMY MAGE',
            nextText: 8
          }
        ]
      },
      {
        id: 8,
        text: 'As the dust settles after the battle, the room seems to be in ruins. As the adventurer sustained ijuries, he finds a health potion, takes it and rests before proceeding on.',
        options: [
          {
            text: 'ADVANCE ON',
            nextText: 9
          },
        
        ]
      },
      {
        id: 9,
        text: 'After leaving the Mages room behind, wondering through dark and damp corridors that lead to nowhere. The adventurer arrives at the highest point of the castle. The adventurer is stairing at a grand door which seems to be made out of steel, and has weird mechanical components automatically opening it. He proceeds on into the dimly light room.',
        options: [
          {
            text: 'LOOK AROUND',
            nextText: 10
          }
        ]
      },
      {
        id: 10,
        text: '"HOW DARE YOU ENETER MY CASTLE HUMAN!?...." sounded a demonic voice. After awhile a ghastly, vamperic creature drops to the ground from the ceiling.',
        options: [
          {
            text: 'INTERACT WITH AND CHALLANGE THE ENEMY CREATURE',
            nextText: 11
          }
        ]
      },
      {
        id: 11,
        text: 'The advenutrer had two choices.....',
        options: [
          {
            text: 'USE THE SWORD',
            nextText: 12
          },
          {

            text: 'USE GOD MODE, SPAWN IN A KALASHNIKOV (AK-47), AND KILL THE CREATURE',
            nextText: 13
          }
        ]
      },
      {
        id: 12,
        text: 'CONGRATS! You have defeated the all the enemies in the castle. Now its yours for the taking.',
        options: [
          {
            text: 'PLAY AGAIN',
            nextText: -1
          }
        ]
      },
    {
      id: 13,
      text: 'CONGRATS! You have defeated the all the enemies in the castle and have taken a more creative approach to defeating the last enemy. Now its yours for the taking.',
      options: [
        {
          text: 'PLAY AGAIN',
          nextText: -1
        }
      ]
    },
    {
      id: 14,
      text: 'CONGRATS! You have recieved a new achievement..... ACHIEVEMENT : EFFORTLESS',
      options: [
        {
          text: 'PLAY AGAIN',
          nextText: -1
        }
      ]
    }

    ]
    
    startGame()