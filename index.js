// 获取所有按钮
const buttons = document.querySelectorAll('.navBtn');
const homeBtn = document.getElementById("homeBtn")
const staticsBtn = document.getElementById("staticsBtn")
const infoBtn = document.getElementById("infoBtn")

// 为每个按钮添加点击事件
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id == "infoBtn") {
            window.open('https://docs.qq.com/aio/DTXhHcmF4cFdiaWVs', '_blank');
        } else {
            buttons.forEach(btn => btn.setAttribute('data-selected', 'false'));
            button.setAttribute('data-selected', 'true');

            const pageId = button.id.replace('Btn', 'Page');
            document.querySelectorAll('.content-page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
        }
    });
});

function setProgress(percent) {
    const progress = document.getElementById('progress');


    const endX = 100 - 100 * Math.cos(0.0471 * percent);
    const endY = - 100 * Math.sin(0.0471 * percent);

    const largeArcFlag = percent > 67 ? 1 : 0;

    const newD = `M120, 120
                  m-110,0 
                  a100,100 0 ${largeArcFlag},1 ${endX},${endY}`;
    progress.setAttribute('d', newD);
}

setProgress(0);


