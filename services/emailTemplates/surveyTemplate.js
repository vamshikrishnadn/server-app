const keys = require('../../config/keys');

module.exports = (survey) => {
  return `<html>
            <body>
              <div style='text-align:center'>
                <h2>I'd like your input</h2>
                <p>Please answer the following question: </p>
                <p>${survey.body}</p>
                <div>
                  <a href='${keys.redirectDomain}/api/surveys/${survey.id}/yes' style="display: inline-block; text-decoration: none; background: lightgreen;border:2px solid green; padding: 10px; font-size: 1.2rem ">Yes</a>
                
                  <a href='${keys.redirectDomain}/api/surveys/${survey.id}/no' style="display: inline-block; text-decoration: none; background: pink; padding: 10px;border:2px solid red; font-size: 1.2rem ">No</a>
                </div>
              </div>
            </body>
          </html>`;
};
