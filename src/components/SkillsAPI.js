import React, {useState} from 'react'
import "../components/css/Skill.css";


export default function SkillsAPI({ done, styleList }) {
    const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle)
    }, 1000)

  return (
    <>
        <div className="progress">
          <div className={styleList} style={style}>
            <h6 className='percentage'>
              {done}%
            </h6>
          </div>
        </div>
    </>
  )
}
