#!/usr/bin/env python3
'''4. Tasks'''
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn task_wait_random n times and return delays by completion order."""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    results = []

    for el in asyncio.as_completed(tasks):
        delay = await el
        results.append(delay)

    return results
