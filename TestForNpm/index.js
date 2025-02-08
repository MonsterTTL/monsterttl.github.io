import { formatDistanceToNow } from 'date-fns';

const date = "2003-01-16 10:00:00";
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago`;