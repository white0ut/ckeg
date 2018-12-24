import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
import Beer from './beer'
const SPACE_ID = 'ta81nrjr4kkb'
const ACCESS_TOKEN = '0d2407cd6cc4bb728ab0cbf67798e15035a61b6318252a0963ffea36c4376cc4'
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class BeerList extends Component {
    state = {
        beers: [],
        searchString: ''
    }
    constructor() {
        super()
        this.getBeers()
    }
    getBeers = () => {
        client.getEntries({
            content_type: 'beer',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({beers: response.items})
            console.log(this.state.beers)
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }
    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getBeers()
    }
    render() {
        return (
            <div>
                { this.state.beers ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Beers"   
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.beers.map(currentBeer => (
                                <Grid item key={currentBeer.sys.id} xs={12} sm={6} lg={4} xl={3}>
                                    <Beer beer={currentBeer} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No beers found" }
            </div>
        )
    }
}
export default BeerList;