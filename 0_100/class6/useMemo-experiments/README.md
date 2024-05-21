# useMemo 

learn working of useMemo

## Memoization: NO need to recompute, instead use the previous or cached data to calculate the new data

### app.jsx
- used multiple useState
- created a basic program to calculate the sum from 1 to n
- now created a useEffect hook to decrease the number of times the finalValue is calculated
- now used the useMemo
- we can just use the useEffect, but useMemo is better approach.
- 