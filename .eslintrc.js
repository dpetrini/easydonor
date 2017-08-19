module.exports = {
    "extends": [
        "recommended/node",
        "recommended/node/style-guide",
    ],
    "rules"  : { 
        "treatUndefinedAsUnspecified": 0,
        "linebreak-style": ["error", "windows"],
        "semi": ["error", "always"],
        "curly": ["error", "multi-line"]
    }
};