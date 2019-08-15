import React from "react";
import { Segment, Image, Header, Container } from "semantic-ui-react";

const Launch = props => {
  return (
    <Segment>
      <Header as="h1" textAlign="center"><Image href={props.launch.links.mission_patch} size="small" alt="Mission Patch" src={props.launch.links.mission_patch} />{props.launch.mission_name}</Header>
      <Container text>
        <p>Date: {props.launch.launch_date_local}</p>             
        <p>Launch Site: {props.launch.launch_site.site_name_long}</p>
      </Container>
      {props.launch.links.flickr_images.map((image) => {
          return (
            <Image className="launchImages" href={image} alt="Launch image" src={image}/>
          )
      })}
      <Container compact textAlign="left" text>{props.launch.details}</Container>

    </Segment>
  );
};

export default Launch;
