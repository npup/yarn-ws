# testing yarn workspaces

## Checkout and install dependencies

    git clone git@github.com:npup/yarn-ws.git
    cd yarn-ws
    yarn install


`node_modules` in root is now populated with all the dependencies, but also have symlink to the referenced workspace ("lib-components") - which has no `node_modules`.  Not sure why.

Check:

    ls -alF node_modules/

## Build dist and run..

    yarn run build
    sirv -p 3003 ./app/dist    # use something else if you don't have `sirv` installed

Works.

## Run in dev mode

    yarn start     # runs locally at port 3003

Works.
