import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <article className="cf">
        <div className="fl w-50 bg-near-white tc">       
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Socrate_du_Louvre.jpg/220px-Socrate_du_Louvre.jpg" className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."  />
                <div className="pa2 ph3-ns pb3-ns">
                    <div className="dt w-100 mt1">
                        <div className="dtc">
                            <h1 className="f5 f4-ns mv0">Socrates</h1>
                        </div>
                        <div className="dtc tr">
                            <h2 className="f5 mv0">Lived: 470–399 BC</h2>
                        </div>
                    </div>
                <p className="f6 lh-copy measure mt2 mid-gray">
                Socrates was a classical Greek philosopher who lived from 470/469 BC to 399 BC. 
                He is credited as one of the founders of Western philosophy and is known for his dialectic method of inquiry. 
                Socrates was famous for his Socratic irony and his ability to ask thought-provoking questions that challenged the beliefs of his students and fellow Athenians. 
                He never wrote any of his ideas down, and his teachings were primarily passed on through the writings of his students, such as Plato and Xenophon. Socrates' philosophy centered around the pursuit of wisdom and the belief that the unexamined life is not worth living. 
                His legacy continues to influence philosophy, ethics, and education to this day.
                </p>
                </div>
            </article>
        </div>
        <div className="fl w-50 bg-light-gray tc">
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/220px-Plato_Silanion_Musei_Capitolini_MC1377.jpg" className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."  />
                <div className="pa2 ph3-ns pb3-ns">
                    <div className="dt w-100 mt1">
                        <div className="dtc">
                            <h1 className="f5 f4-ns mv0">Plato</h1>
                        </div>
                        <div className="dtc tr">
                            <h2 className="f5 mv0">Lived: 428–347 BC</h2>
                        </div>
                    </div>
                <p className="f6 lh-copy measure mt2 mid-gray">
                Plato was a philosopher who lived in ancient Greece from approximately 428/427 BC to 348/347 BC. 
                He was a student of Socrates and went on to become the teacher of Aristotle. Plato is known for his many contributions to philosophy, 
                including his theory of forms, his belief in the existence of an immortal soul, 
                and his ideas about justice and the ideal society. 
                He wrote numerous dialogues, many of which feature Socrates as the main character, 
                and his works continue to be studied and debated in the field of philosophy to this day.
                </p>
                </div>
            </article>
        </div>
        <div className="box">
            
        </div>
    </article>
  )
}

export default Card