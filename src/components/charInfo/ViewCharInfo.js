import { Link } from 'react-router-dom'

export const ViewCharInfo = ({data}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = data

    let imgStyle = {'objectFit' : 'cover'}
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'}
    }

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={imgStyle}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Комікси:</div>
            <ul className="char__comics-list">
                {!comics.length && "Комікси у персонажа відсутні"}
                {comics.map((item, i) => {
                    // eslint-disable-next-line
                    if (i > 9) return;
                    return (
                        <li key={i} className="char__comics-item">
                            <Link to={`/comics/${item.resourceURI.slice(43)}`}>{item.name}</Link>
                        </li>
                    )
                })}                
            </ul>
        </>
    )
}
