window.addEventListener('load', () => {
    attachEventHandlers();
})

const attachEventHandlers = () => {
    run_code_button();
}

const run_code_button = () => {
    const run_button = document.getElementById("run-button");
    run_button.addEventListener('click', () => {
        init_terminal_animation();
    });
}

const init_terminal_animation = () => {
    const terminal = document.getElementById('terminal')
    const line1 = document.getElementById('line-1')
    // const line = document.createElement('div')
    const code = document.createElement('h4')
    const result = document.createElement('h4')

    let code_text = document.createTextNode('>>> Print("Hello World")')
    let result_text = document.createTextNode('"Hello World"')

    line1.style.display ='none';

    code.appendChild(code_text)
    result.appendChild(result_text)

    terminal.appendChild(code);
    terminal.appendChild(result);

    const default_terminal_line = document.createElement('div')
    
    const terminal_line_user = document.createElement('h4')
    const termina_line_text = document.createTextNode("Will's-Macbook-Pro:~ user$ ")
    terminal_line_user.appendChild(termina_line_text);

    const terminal_cursor = document.createElement('span')
    const terminal_cursor_text = document.createTextNode('|')
    terminal_cursor_text.className = "text-cursor"
    terminal_cursor.appendChild(terminal_cursor_text)

    terminal_line_user.appendChild(terminal_cursor)

    default_terminal_line.appendChild(terminal_line_user)


    terminal.appendChild(default_terminal_line)
    
}

{/* <div id="terminal-line" >
    <h4>Will's-Macbook-Pro:~ user$ <span class="text-cursor" >|</span></h4>
</div> */}