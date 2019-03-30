
/**
 * Created by Deegha on 19/03/2019
 */

import Link from 'next/link'
import { Header, FeedItem, FilterTab } from '../../components'
import { APP_NAME, APP_LOG } from '../../config/config'
import * as CAT from '../../components/categories'
import MasonryLayout from 'react-masonry-layout'
import css from './styles.scss'

import Masonry from 'react-masonry-component'
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

  selectFilter = (filter) => () => this.props.setFilter(filter)

  // selectFilter = (filter) => () => this.setState({filter})

  render() {

    const { feeds, loading, filter } = this.props
    const { width, height } = this.state
    const isMobile = width < 600

    const filterStyles = {
      justifyContent: isMobile? 'space-evenly': 'center' 
    }

    let filteredFeeds = feeds

    if(filter !== 'all') {
      filteredFeeds = feeds.filter(feed => {
        return feed.category === filter
      })
    }
    return (
      <div className={css.container}>
        <Header
          ogImage={APP_LOG}
          url={"/"}
          title={`${APP_NAME} | ${filter}`} 
          description={"Promotions and deals in Srilanka"}/>

          {loading? (
            <div /> 
          ): (
            <div>
              <div className={css.filterWrapper} style={filterStyles}>
            <FilterTab 
              title={"Trending"} selected={filter === CAT.ALL_CAT} callback={this.selectFilter} prop={CAT.ALL_CAT} />
            <FilterTab 
              title={"fashion"} selected={filter === CAT.FASHION_CAT} callback={this.selectFilter} prop={CAT.FASHION_CAT}/>
            <FilterTab 
              title={"food"} selected={filter === CAT.FOOD_CAT} callback={this.selectFilter} prop={CAT.FOOD_CAT}/>
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
            {filteredFeeds.length > 0 ? filteredFeeds.map(feed => (
              <FeedItem 
                key={feed.id}
                isMobile={isMobile}
                height={height}
                feed={feed} />
            )): <div className={css.noContent}>Sorry! no content on this category</div>}
          </div>
        </div>
        )}
          
      </div>
    )
  }
}