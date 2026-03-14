const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VUyY6jSBD9lVFebbXZbGykkgYwhTe8YfAy6kMCCaRZTSabW/73Ea6q7jrM9NRwSnKJePHei/gB0gwTtEQtkH6AvMAVpKhb0jZHQAJK6fuoAH3gQQqBBKLlUiXcbDa8+9f1CVZH19qFPqbNrtnUfhNgoqmEaQYlJ7yARx/kpRNj9zcBBfFoQiER1mhxKkO9CbYleb1y3KSccW3PVkNu466r04rWwQt4dBEhLnAaaHmIElTAeInaLcTF1+DD1Xy1T+zV3dydWo+z1/rFLp2yHByMzLYHYVxuBeuUL5XU/Rr8sU1XSuM5bNUIVc5MPX9WCed6I7uycjtjeurtIrGdVLXNvMEnOEiRN/dQSjFtv8x7KeMtwzfm2jItmDoWb+wXRrViMx3Pi+la3wjCnc3dlZ1qXwNOZ+JwYWjtlSBBP5naocfO+UmmRLNZ2kNWjUt2q1XtgNnLn4Fviw+vRP+Hd2ujJEqz2N91VjEXzGUfGG4WOHG9DodzZfVqTYRk4xBImPPX4NeVI0Zbc1zy85jhepp6KuylP9uvnIURx8muGlnFmpttGOsT75CWxe9QTpupkVRnT7RPjaJiZ7PBhnoYXF+541VX1rfDcm+muyu+XPlaESxcD/QDb8Zz3j8E4a0mwXHptbPDidsJB9Hil0dzvlR3L8+KItTOPSCxjz4oUIAJLSDFWfrc4/k+gF5lIrdA9EkvqJkAZoibHttebxq5yyxzt+fEkqOJcMTXkaou7PAw3rdwH72APsiLzEWEIG+GCc2K1kCEwAARIP31vQ9S1NA34bp0PNcHPi4ItdIyjzPofaj6cQhdNytTarapq3YLVACJ+bWNKMVpQDoeyxQWbogrpIaQEiD5MCboZ4WoQB6QaFGin12rZl5H/Gyxmi8n5zXog+QpCPaABCaCOBKZocAMOWky/JN8q7uoMM+/pYiCPkhhdxksYYVTr/xjnnplDQsI+iB+vmf5yXDCcgw7Hg0no0kXozt4/ITeZfIQhTgmQALqRkyIESja4kZYg9F1WQtkNZDBr1I/PPOmSe/INva0tnuMc6Lno67s9umsdas4wZPraJTeKj1fZc0Z4eDlH4IACRQJVwRZGrHaxTmLYtS0Rj2gCL2uB73BUeZ4Iu/uPQeH+t2wi0sYsUs6TP1GXy/IfToc5N54ZUFNVJVd4Bnj8/LWyE+D9YGHKuyiz8kOzjw5nS09XtysLccfBqeLasvFyDecNlGEezS+inJ0K6vbLjaC3cJqXnleJdEptFNu02gTkdjR3gxXw5vPW+ZI4+a18u7mZzfF71MMP33Widj9+hg9h8K7Wv8l6hvuznrMo/8pxPuU+ZdOVfyYuvZu/OpTnRWPr2FgaZdmnK6Gl6w698p8VDQ3c2QcZ1kGHo/vfZDHkPpZkQAJkMTpTFNkZWfkeepnv8mkytZcCwK1qzqGhMq/muOAE0QoTHIgsaLIC+KQHw3fbm2LLJ9BEgIJbI/RUOmM3sp5blJIP1oNyN23MGLw+Bs0j45NhgcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
