import React, {useState} from 'react'


export default function TextForm(props) {
    
    const [text, setText] = useState("")
    const [word, setWord] = useState(0)
    const [character, setCharacter] = useState(0);

    function onClickCap (){
        let newText = text.toUpperCase();
        setText(newText);
    }
    function onClickLow (){
        let newText = text.toLowerCase();
        setText(newText);
    }
    function onClear() {
      setText("");
    }

    function onChangeText(e){
        setText(e.target.value)
        setWord(e.target.value.split(" ").length)
        setCharacter(e.target.value.length)
    }


    return (
      <>
        <div className="container my-3">
          <div
            className="mb-3"
            style={{
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <h2>{props.heading}</h2>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              value={text}
              placeholder="Enter text here"
              onChange={onChangeText}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "grey",
                color: props.mode === "light" ? "black" : "white",
              }}
            ></textarea>
            <button
              type="button"
              className="btn btn-primary my-3"
              onClick={onClickCap}
            >
              Captalize
            </button>
            <button
              type="button"
              className="btn btn-primary my-3 mx-3"
              onClick={onClickLow}
            >
              LowerCase
            </button>
            <button
              type="button"
              className="btn btn-primary my-3 "
              onClick={onClear}
            >
              Clear
            </button>
          </div>
        </div>

        <div className="container">
          <h2>Your Text Summary</h2>
          <p>
            {word} Words, {character} characters
          </p>
          <p>{(0.008 * word).toFixed(3)} Minutes to read it</p>
        </div>
      </>
    );
}
