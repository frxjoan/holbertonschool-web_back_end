#!/usr/bin/env python3
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiplies a float by a given multiplier.

    Args:
        multiplier: The number to multiply by.

    Returns:
        A function that takes a float and returns the result of multiplying
        it by the multiplier.
    """
    def multiplier_func(n: float) -> float:
        return n * multiplier

    return multiplier_func