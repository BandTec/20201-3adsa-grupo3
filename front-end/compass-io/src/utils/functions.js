import md5 from 'md5'

class CommomFunctions {

    static convertFormToJson(form) {
        var object = {};
        for (var i = 0; i < form.childElementCount; i++) {
          object[form[i].id] = form[i].innerText;
        }
        return JSON.stringify(object);
    }

    static encryptPassword(password) {
      return md5(password);
    }
}

export default CommomFunctions;