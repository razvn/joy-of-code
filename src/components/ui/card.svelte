<script lang="ts">
  import { twitter } from '$root/lib/config'

  import {
    ArrowNarrowRightIcon,
    MailIcon,
    PencilAltIcon,
  } from '@rgossiaux/svelte-heroicons/outline'
  import Newsletter from './newsletter.svelte'

  export let preset: 'edit' | 'newsletter'
  export let editUrl = ''
</script>

{#if preset === 'edit'}
  <div class="card">
    <div class="decorative">
      <PencilAltIcon width="24" height="24" aria-hidden="true" />
    </div>
    <span class="title">Found a mistake?</span>
    <p class="text">
      Every post is a Markdown file so contributing is simple as following the
      link below and pressing the pencil icon inside GitHub to edit it.
    </p>
    <a class="link" href={editUrl} target="_blank">
      <span>Edit on GitHub</span>
      <ArrowNarrowRightIcon width="24" height="24" aria-hidden="true" />
    </a>
  </div>
{/if}

{#if preset === 'newsletter'}
  <div class="card">
    <div class="decorative">
      <MailIcon width="24" height="24" aria-hidden="true" />
    </div>
    <span class="title">Subscribe For Updates</span>
    <Newsletter />
    <span class="subscribe">
      Subscribe to the <a href="/rss.xml" target="_blank">RSS feed</a> or
      <a href={twitter} target="_blank">Twitter</a> instead.
    </span>
  </div>
{/if}

<style>
  .card {
    position: relative;
    padding: var(--spacing-32);
    border: 4px solid var(--clr-primary);
    border-radius: var(--rounded-20);
  }

  .card .decorative {
    display: grid;
    place-content: center;
    width: 48px;
    height: 48px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 50%;
    background-color: var(--clr-bg);
  }

  .card .decorative :global(svg) {
    color: var(--clr-primary);
  }

  .card .title {
    font-size: var(--font-24);
    font-weight: 700;
    line-height: 32px;
  }

  .card .text {
    color: var(--clr-card-txt);
    margin-top: var(--spacing-8);
    margin-bottom: var(--spacing-32);
  }

  .card .link {
    width: max-content;
    display: flex;
    gap: var(--spacing-16);
  }

  .card :global(form) {
    margin: var(--spacing-16) 0;
  }
</style>
