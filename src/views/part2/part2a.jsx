const Part2a = () => {

    return (
        <ol>
            <h1>Explanation of CLIP</h1>
            <li>CLIP (Contrastive Language-Image Pre-training) is a neural network model developed by
                OpenAI that learns visual concepts from natural language supervision. It is trained on pairs of
                images and text descriptions to learn visual-semantic relationships, allowing it to perform
                various visual recognition tasks without specific training for each task.
            </li><br />
            <h1>Key Research Finding</h1>
            <li><b>O(log(n)) Key Finding:</b> Log-linear scaling between concept frequency and zero-shot performance. Across all
                the 16 different plots, we observe a clear log-linear relationship between pretraining concept frequency
                and zero-shot performance.
            </li>
        </ol>
    )
}


export default Part2a;