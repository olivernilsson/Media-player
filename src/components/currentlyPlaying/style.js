import styled from "styled-components"

export const StyledCurrentlyPlaying = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 0;
  height: 100%;
  width: 40%;
  background: #222f3e;
`
export const StyledCurrentlyPlayingImage = styled.img`
  position: relative;
  display: inline-block;
  bottom: 0;
  height: 80px;
  width: 100px;
  margin: 10px; 
  background: #222f3e;
  outline: none;
  object-fit: cover;
`
export const StyledCurrentlyPlayingTextContainer = styled.div`
  display: block;
  height: 100%;
  width: calc(100% - 120px);
  flex-direction: column;
`
export const StyledCurrentlyPlayingSong = styled.div`
  display: block;
  height: calc(50% - 12px);
  padding-top: 3px;
  margin-top: 12px;

`
export const StyledCurrentlyPlayingArtist = styled.div`
  display: block;
  height: calc(50% - 12px);
  margin-bottom: 12px;
`