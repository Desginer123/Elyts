import { article } from '../../pages/News';
import style from './NewsBlock.module.scss';
const NewsBlock:React.FC<article> = ({title, description, urlToImage}) => {
    return (
        <div className={style.news_block}>
            <img src={urlToImage} alt="news" className={style.news_block_image} />
            <h2 className={style.title}>Название</h2>
            <p className={style.description}>Описание</p>
        </div>
    )
}

export default NewsBlock