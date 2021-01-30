import {useState} from 'react'
import ClassNames from 'classnames';

import card_back_side from './card-back-side.jpg';
import s from './style.module.css';

const PokemonCard = ({id, name, type, values, image}) => {
  const [active, setActive] = useState(false)
  const onClick = () => {
    setActive(!active)
  }
  return (
    <div className={s.root} onClick={onClick}>
      <div className={ClassNames(s.pokemonCard, active && s.active)}>
        <div className={s.cardFront}>
            <div className={ClassNames(s.wrap, s.front)}>
              <div className={ClassNames(s.pokemon, s[type])}>
                  <div className={s.values}>
                    <div className={ClassNames(s.count, s.top)}>    {values && values.top     ? values.top: "-"}</div>
                    <div className={ClassNames(s.count, s.right)}>  {values && values.right   ? values.right: 0}</div>
                    <div className={ClassNames(s.count, s.bottom)}> {values && values.bottom  ? values.bottom: 0}</div>
                    <div className={ClassNames(s.count, s.left)}>   {values && values.left    ? values.left: 0}</div>
                  </div>
                  <div className={s.imgContainer}>
                    <img src={image} alt={name} />
                  </div>
                  <div className={s.info}>
                    <span className={s.number}>{`# ${id}`}</span>
                    <h3 className={s.name}>{name}</h3>
                    <small className={s.type}>
                      Type: <span>{type}</span>
                    </small>
                  </div>
              </div>
            </div>
        </div>
          <div className={s.cardBack}>
              <div className={ClassNames(s.wrap, s.back)}>
                <img src={card_back_side} alt="Сard Backed" />
              </div>
          </div>
        </div>
    </div>
  )
}

export default PokemonCard;