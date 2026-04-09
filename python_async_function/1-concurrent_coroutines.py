#!/usr/bin/env python3
'''1. Concurrent coroutines'''
import asyncio
from typing import List
wait_random = __import__("0-basic_async_syntax").wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Asynchronous coroutine that spawns wait_random n
    times with the specified max_delay and returns the list of all
    delays sorted in ascending order.
    """
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    results = []

    for el in asyncio.as_completed(tasks):
        delay = await el
        results.append(delay)

    return results
