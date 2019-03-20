
/**
 * Created by Deegha on 19/03/2019
 */

import Link from 'next/link'
import { Header, FeedItem, FilterTab } from '../../components'
import {APP_NAME} from '../../config/config'
import * as CAT from '../../components/categories'

import css from './styles.scss'
const logo = `https://firebasestorage.googleapis.com/v0/b/like-me-65680.appspot.com/o/sitebranding%2Ficon.png?alt=media&token=91b86f11-7b5c-4a20-a014-ffdbc65bd575`

export class LandingPageView extends React.Component {

  state={
    filter: 'all',
    width: 0,
    height: 0
  }
  
  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  selectFilter = (filter) => () => this.setState({filter})

  render() {

    const { feeds } = this.props
    const { width, height, filter } = this.state
    
    const isMobile = width < 600

    const filterStyles = {
      justifyContent: isMobile? 'space-evenly': 'center' 
    }

    let filteredFeeds = feeds

    if(filter !== 'all') {
      // title = this.capitalize(filter)
      filteredFeeds = feeds.filter(feed => {
        return feed.category === filter
      })
    }

    return (
      <div className={css.container}>
        <Header
          ogImage={logo}
          url={"/"}
          title={APP_NAME} 
          description={"Promotions and deals in Srilanka"}/>
          <div className={css.filterWrapper} style={filterStyles}>
            <FilterTab 
              title={"all"} selected={filter === CAT.ALL_CAT} callback={this.selectFilter} prop={CAT.ALL_CAT} />
            <FilterTab 
              title={"fashion"} selected={filter === CAT.FASHION_CAT} callback={this.selectFilter} prop={CAT.FASHION_CAT}/>
            <FilterTab 
              title={"travel"} selected={filter === CAT.TRAVEL_CAT} callback={this.selectFilter} prop={CAT.TRAVEL_CAT}/>
            <FilterTab 
              title={"health"} selected={filter === CAT.HEALTH_CAT} callback={this.selectFilter} prop={CAT.HEALTH_CAT}/>
            <FilterTab 
              title={"happy hours"} selected={filter === CAT.DRINKS_CAT} callback={this.selectFilter} prop={CAT.DRINKS_CAT} />
            <FilterTab 
              title={"rides"} selected={filter === CAT.RIDES_CAT}callback={this.selectFilter} prop={CAT.RIDES_CAT}/>
          
            <FilterTab 
              title={"beauty"} selected={filter === CAT.BEAUTY_CAT} callback={this.selectFilter} prop={CAT.BEAUTY_CAT}/>
            <FilterTab 
              title={"cards"} selected={filter === CAT.CARDS_CAT} callback={this.selectFilter} prop={CAT.CARDS_CAT}/>
            <FilterTab 
              title={"clothing"} selected={filter === CAT.CLOTHING_CAT} callback={this.selectFilter} prop={CAT.CLOTHING_CAT}/>
          </div>
          <div className={css.wrapper}  style={filterStyles}>
            {filteredFeeds.map(feed => (
              <FeedItem 
                key={feed.id}
                isMobile={isMobile}
                height={height}
                feed={feed} />
            ))}
          </div>
      </div>
    )
  }
}