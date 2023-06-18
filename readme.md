<img src="https://codedthemes.com/wp-content/uploads/edd/2022/05/Materially-ReactJS-Admin-Dashboard.webp" alt="Materially-ReactJS-Admin-Dashboard.webp" width=""/>

# kelvinkamara

(05-Apr-23) Soundscape, background noise app.

- We can do it and it's not just do it.

- What are they tryna tell you?

- Erm...

## Requirements

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/).

## Installation

```bash
  yarn # and yarn install
```

## Usage

```bash
  yarn start
```

## More

* [Desktop 2023](https://raw.githubusercontent.com/kkamara/useful/main/desktop-2023.png)
* [Desktop 2023 extra](https://github.com/kkamara/useful/commit/a9e620925598c945ad71501388dc615f4b381d33) (comments at the bottom of the page)

I recommend working with Amazon Alexa speakers e.g. Echo Dot. We can twirl Echo Dot in our hands.

## Misc

[See react boilerplate.](https://github.com/kkamara/react-boilerplate)

[See php scraper.](https://github.com/kkamara/php-scraper)

[See node react boilerplate.](https://github.com/kkamara/node-react-boilerplate)

I wear sunglasses (I mostly keep them on the top of my head rather than on my nose) and [face mask](https://www.amazon.co.uk/gp/product/B08FK54H5Q) (I mostly keep that under my chin). I will remove my tonsils ASAP.

## Design notes

https://mui.com/material-ui/material-icons/

https://fontawesome.com/icons

```
Volume slider
https://codepen.io/emilcarlsson/pen/PPNLPy

Audio player repeat
https://codepen.io/vanderzak/pen/BayjVep
https://codepen.io/RodenKerthin/pen/JjNKQVB

Online offline status
https://codepen.io/NitrogenFlux/pen/GzpYvZ
https://codepen.io/manpreet/pen/BKvzGx

Video player repeat
https://codepen.io/liquidvisual/pen/WzgMyZ
https://codepen.io/bdougherty/pen/oLZRXM
https://codepen.io/wesbos/pen/bqEEEX
```

## Planning notes

~~Playable [fractal animations](https://www.youtube.com/watch?v=t6jlhqNxRYk).~~

* [Kelvin Kamara engine](https://github.com/kkamara/kelvinkamara#engine--core).

##### Engine / Core

Global player options control play, pause and volume.

Volumes 60, 65 and 30, 35 are good volumes to listen. And 25 is a good volume for listening to music on low volume.

User's saved volume templates.

Choose from Kelvin's saved volume templates.

###### Music (optional):

* [Metal Mix Cognition Enhancer For ADHD, Clearer and Faster Thinking.m4a](https://www.youtube.com/watch?v=tCCkHJNeV20) (audio player for online & offline modes) [ ✅ ] volume 45.

###### Music radio (optional):

* [Capital London](https://www.radioplayeruk.com/radio/pop/capitalfm/london.php) (radio player for online modes) [ ✅ ].

###### News radio (optional):

* [LBC](https://www.radioplayeruk.com/radio/sporttalk/lbc.php) (radio player for online modes) [ ✅ ].

###### Sports radio (optional):

* [talkSPORT](https://www.radioplayeruk.com/radio/sporttalk/talksport.php) (radio player for online modes) [ ✅ ]
* [talkSPORT2](https://www.radioplayeruk.com/radio/sporttalk/talksport2.php) (radio player for online modes) [ ✅ ].

###### Sounds:

* [Hammer Hitting Metal Sound Effect - 8 HOURS - with video - Metalworking Workshop sounds.m4a](https://www.youtube.com/watch?v=7d5j4mvprs0) [ ✅ ] volume 50 (audio player for online & offline modes)

* [New! Extra Loud ★ Green Noise ★ Black Screen #sleep #relaxing #calming.m4a](https://www.youtube.com/watch?v=7HhfE2UlWb0) [ ✅ ] volume 45 (audio player for online & offline modes)

~~* [Pink Noise Ten Hours - The Classic Now in Dark Screen](https://www.youtube.com/watch?v=8SHf6wmX5MU) [ ✅ ] volume 100~~

~~* [ASMR Bright Light Triggers *Click Sounds* Gentle Eye Tests & Instructions](https://www.youtube.com/watch?v=0hknw8I4_SY) [ ✅ ] volume 100~~

~~* [Rain on Tin Roof | BLACK SCREEN | Sleep, Study, Relax, Meditate | White Noise](https://www.youtube.com/watch?v=cDUSttYcq2g) [ ✅ ] volume 100~~

Note: the rain on tin roof is super similar to the heavy hitting of rain I experienced at Gibraltar, UK (south of Spain) where the weather climate is hot. I also experienced 30+ degree celcius weather in my travel during Gibraltar's winter period. Gibraltar has had two referendums on staying in the UK and Gibraltar have voted twice 99% to remain in the UK.

###### APIs

* https://www.radioplayeruk.com

* https://www.youtube.com/@SensationmusicBlack/playlists

* https://developers.google.com/youtube/player_parameters

* https://smashballoon.com/how-to-embed-youtube-playlist-in-wordpress/

* https://ukradiolive.com/embed-radio

* https://garfnet.org.uk/cms/tables/radio-frequencies/internet-radio-player/

Reload DOM every x minutes to randomize `currentTime` for offline content.

The play settings for online content stay the same.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
