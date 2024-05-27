const nemo = ['nemo']
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
  'nemo',
]

const large = new Array(10000).fill('nemo')

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('running')
    if (array[i] === 'nemo') {
      console.log('Found Nemo!')
      break
    }
  }
}

findNemo(everyone) // 0(n) --> Linear Time, it takes linear time to find nemo

const findNemo2 = array => {
  array.forEach(fish => {
    if (fish === 'nemo') {
      console.log('Found Nemo!')
    }
  })
}

// Another way of writing findNemo2 function
const findNemo3 = array => {
  for (let fish of array) {
    if (fish === 'nemo') {
      console.log('Found nemo')
    }
  }
}

findNemo2(everyone) // O(n)
findNemo3(everyone) // O(n)
