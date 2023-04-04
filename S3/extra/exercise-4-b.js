const button = document.createElement('button');
    button.textContent = 'Eliminar último elemento';
    button.addEventListener('click', () => {
        const lastDiv = container.lastElementChild;
        if (lastDiv) {
            container.removeChild(lastDiv);
        }
    });

    container.after(button);