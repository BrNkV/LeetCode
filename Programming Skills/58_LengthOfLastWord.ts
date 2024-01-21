function lengthOfLastWord(s: string): number {
    let len = s.trim().split(' ');
    return (len[len.length-1].length);
};