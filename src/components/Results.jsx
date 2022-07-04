import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent } from 'React';

const SERVER_URL = proces.env.REACT_APP_SERVER_URL;

function Results() {

    const [results, setResults] = useState([]);

    useEffect(() => {
        getResults();
    }, []);

    async function getResults() {
        let serverURL = `${serverURL}/Cats`; // API Url here
        let gottenResults = await axios.get(serverURL);
        setResults(gottenResults.data);
    };

    return (
        <>
          <div>
            <h2>Kitties</h2>
          </div>
          {results.length > 0 ? (
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 3,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {
                results.slice(0, 4).map((result, idx) => (
                  <div key={idx}>
                    <Card sx={{
                      minWidth: 275,
                      marginTop: 20,
                      height: '25em'
                    }}>
                      <CardContent>
                        <CardMedia
                          component="img"
                          height="250"
                          image={result.imageUrl ? result.imageUrl : ""}
                          alt={result.imageUrl ? result.imageUrl : ""}
                        />
                        <Typography gutterBottom variant="h5" component="div">
                          {result.id}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" href={`/search?cat=${result.id}`}>Another</Button>
                      </CardActions>
                    </Card>
                  </div>
                ))
              }
            </Carousel>
          ) : (
            <p>Servers are down!!! 😱</p>
          )}
        </>
      );
};

export default Results
