#!/usr/bin/env python3
'''1. Concurrent coroutines'''
import asyncio
wait_random = __import__("0-basic_async_syntax").wait_random


async def wait_n(n: int, max_delay: int) -> list[float]:
    """Asynchronous coroutine that returns a list of all the delays (float
    values) of the n coroutines created by wait_random(max_delay).
    The returned list is sorted in ascending order.
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
