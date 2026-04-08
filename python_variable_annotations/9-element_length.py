#!/usr/bin/python3
from typing import Tuple, Sequence, List, Iterable


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples with the length of each element in a list."""
    return [(i, len(i)) for i in lst]
