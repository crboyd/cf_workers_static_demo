export default {
  async fetch(request, env, ctx) {
    // The assets binding allows us to fetch from the assets directory
    // However, if we use the [assets] configuration in wrangler.toml, 
    // Cloudflare handles the asset serving BEFORE the worker is called
    // if a match is found.
    
    // So if someone requests /index.html or /, it will be served by assets.
    // If they request something else, it comes here.
    
    return new Response("Not Found", { status: 404 });
  },
};
