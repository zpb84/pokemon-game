import PropTypes from 'prop-types';
import s from './style.module.css'

const Layout = ({id, colorBg, urlBg, title="Title", desc="Desc"}) => {
  const style = {}
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
          <div className={[s.des, s.full]}>
            <p>{desc}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

Layout.propTypes = {
  id: PropTypes.string
};

export default Layout;