[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/with-react-transition-group)
# nextjs_relative_position_overlaping

## How to use
download the repository
then run:
npm install
yarn install 

then
npm run dev
yarn dev

**original problem** *source of stackoverflow's discussion here: https://stackoverflow.com/posts/57841177/edit*:
I have tried to create a sandbox using codesandbox and stackblitz but concerning Nextjs theses two solutions are still to bêta state it seems. So I have created a minimal repository in Github. You can find it here: https://github.com/Hocoh/nextjs_relative_position_overlaping

Okay my problem is that I would make the two page's component (div) overlapping each other on page transition. Each div follow a cycle from CSSTransition of react-transition-group. I have tried to make that the entering page has a relative position and a z-index of 1, then the exiting page a relative position and a z-index of 2. 

From what I am knowing the positionment of the div coupled to the z-index should trigger Z's stack, allowing the divs to overlapping each other. But is fails. The div seems to telescopate and reposition as if they was on a same Z frequence. 

So what can I do? 
