
document.querySelector('.wrong').style.display = 'none';
document.querySelector('.img').addEventListener("click", () => {
    document.querySelector('.abc').classList.toggle('abcgo');
    if (document.querySelector('.abc').classList.contains('abcgo')) {
        document.querySelector('.menu').style.display = 'inline'
        document.querySelector('.wrong').style.display = 'none'
    }
    else {
        document.querySelector('.menu').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.wrong').style.display = 'inline'
        }, 300);
    }
})
