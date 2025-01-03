let authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTAwMjFlNDAwZTQxN2I1NTBjYjllNjM3M2VmMDE5NyIsIm5iZiI6MTczNTY0MDU1MS43MDMsInN1YiI6IjY3NzNjNWU3NWYxYzRmYTQ3MzYxOTlhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pPv33Beuq7uAdaiyM4yDCzFmor1bOmkf0le0insa1Jo'
export const getTmdbHeader = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
}