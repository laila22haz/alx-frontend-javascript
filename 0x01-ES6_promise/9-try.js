export default function guardrail(mathFunction) {
    const queue = [];
    try {
        const execute_math = mathFunction();
        queue.push(execute_math);
    } catch(error) {
        queue.push(`Error: ${error.message}`);
    }
    queue.push('Guardrail was processed');
    return queue
}
