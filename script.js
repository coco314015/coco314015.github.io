window.addEventListener('DOMContentLoaded', (event) => {
    const birds = document.querySelectorAll('.bird');
    const topone = document.getElementById('topone')
    const middleone = document.getElementById('middleone')
    const endone = document.getElementById('endone')
    const fir = document.getElementById('hello')
    const icon = document.getElementById('icon')

    const img1 = "05.png";
    const img2 = "06.png";

    icon.addEventListener('click', function() {
        // 步驟 1: 先讓圖片變透明 (加上 .fade-out)
        fir.classList.add('fade-out');

        // 步驟 2: 等待 0.5 秒 (剛好是 CSS transition 的時間)
        // 確保圖片完全看不見了，再偷偷換圖片來源
        setTimeout(() => {
            if (fir.src.includes(img1)) {
                fir.src = img2;
            } else {
                fir.src = img1;
            }

            // 步驟 3: 圖片換好後，把 .fade-out 拿掉
            // 圖片就會因為 transition 的關係，慢慢從透明變回顯示 (淡入)
            fir.classList.remove('fade-out');
        }, 500); 
    });

    birds.forEach(bird => {
        bird.addEventListener('click', function() {
            const birdId = this.id;
            console.log("點擊了:", birdId);
            
            switch(birdId) {
                case 'topping':
                    topone.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                    });
                    break;
            
                case 'middleling':
                    middleone.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                    });
                    break;

                case 'ending':
                    endone.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                    });
                    break;
            }
        });
    });
});
