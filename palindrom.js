function isPalindrom(str)
{
    for (let i = 0; i < str.length / 2; i++)
    {
        console.log(str.length / 2);
        if (str[i] !== str[str.length - i])
        {
            return 'It is not palindrom';
        }
    }
    return 'It is palindrom';
}

// take input
const string = 'maam';

// call the function
const value = isPalindrom(string);

console.log(value);