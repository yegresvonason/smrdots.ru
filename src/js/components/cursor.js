function initCursor() {
    
    const cursor = document.getElementById('cursor'),
        cursorInner = document.getElementById('cursor-inner');

    document.addEventListener('mousemove', function(event) {
        console.log(event);

        const x = event.clientX,
            y = event.clientY;

        cursorInner.style.transform = 'matrix(1, 0, 0, 1, ' + x + ', ' + y + '';
        
        setTimeout(() => {
            cursor.style.transform = 'matrix(1, 0, 0, 1, ' + x + ', ' + y + '';
        }, 50);

    });

}

export default initCursor;