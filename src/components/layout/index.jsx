import PropTypes from 'prop-types'; // Компонент для проверки свойств
import s from './style.module.css'; // Подключение CSS-стиля, как модуля

const Layout = ({id, colorBg, urlBg, title="Title", children}) => {
  const style = {}
  // Формирование встраиваемого стиля в зависимости от свойств urlBg и colorBg
  if (urlBg) {
    style.backgroundImage=`url(${urlBg})`
    style.backgroundSize = "cover"
    style.overflow = "hidden"
  } else if (colorBg) {
    style.backgroundColor=colorBg
  }
  return (
    <section className={s.root} id={id} style={style}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          {children && children.map((itm)=>itm)}
        </article>
      </div>
    </section>
  );
}

// Проверка типа свойства id
Layout.propTypes = {
  id: PropTypes.string
};

export default Layout;