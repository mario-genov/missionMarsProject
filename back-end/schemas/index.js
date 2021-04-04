import article from './Article';
import user from './User';
import auth from './Auth';
1
function setSchemas(mongoose) {
    return {
        Article: article(mongoose),
        User: user(mongoose),
        Auth: auth(mongoose),
    };
}

export default setSchemas;
