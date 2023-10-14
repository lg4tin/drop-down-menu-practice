/*eslint-disable*/

const dropdownBtn = document.querySelector('.btn');
    const dropdownList = document.querySelector('.dropdown');
    dropdownBtn.addEventListener('click', () => {
      dropdownList.classList.toggle('show');
    })

    window.onclick = e => {
      if(!event.target.matches('.btn')) {
        dropdownList.classList.remove('show');
      }
    }

    let pictures = [
      'pics/bobby-iv-NzBbzlPbO5c-unsplash.jpg',
      'pics/carissa-gan-_0JpjeqtSyg-unsplash.jpg',
      'pics/jonas-kakaroto-zlKdLdMREtE-unsplash.jpg',
      'pics/nik-owens-40OJLYVWeeM-unsplash.jpg',
      'pics/pexels-blue-bird-7210748.jpg',
      'pics/pexels-julissa-helmuth-3196887.jpg',
      'pics/pexels-samson-katt-5255202.jpg',
      'pics/pexels-la-miko-3671300.jpg'
    ]

    const image = document.querySelector('#image');

    let currentIndex = 0;

    image.src = pictures[currentIndex];

    
    const slideshow = setInterval(() => {
      if(currentIndex <= 6) {
        currentIndex++
      } else {
        currentIndex = 0;
      }
      image.src = pictures[currentIndex];
      inputs[currentIndex].textContent = 'hi';
      setInterval(() => {
        inputs[currentIndex].textContent = '0';
      }, 5000);
    }, 5000)
  

    function next() {
      if(currentIndex <= 6) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      image.src = pictures[currentIndex];
    }

    function last() {
      if(currentIndex == 0) {
        currentIndex = 7;
      } else {
        currentIndex--;
      }
      image.src = pictures[currentIndex];
    }

    const inputs = document.querySelectorAll('.circles button')

    

    /*inputs.forEach(input => {
      input.addEventListener('click', () => {
        image.src = pictures[input]
      })
    })*/

    function choosePicture(index) {
      image.src = pictures[index];
    }