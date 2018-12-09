export default function createRequest(section, input, page) {
    return `http://api.giphy.com/v1/${section}/search?api_key=yvYbVbLcBv5PZY8vGkJuxJo4N05RCFUq&q=${input}&limit=${page === 0 ? 10 : 5}&offset=${page === 0 ? 0 : 10 + (page - 1) * 5}`;
}