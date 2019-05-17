# Puzzle CLI Prelaunch Preset Template

A modern, minimal prelaunch preset for Jigsaw powered by Tailwind CSS

## Installation

If using Puzzle CLI, pass the `--preset` flag with a value of `prelaunch`:

```bash
puzzle new my-site --preset prelaunch
```

If you are installing Jigsaw manually, after installing Jigsaw, run the following command from your project directory:

```bash
./vendor/bin/jigsaw init geoffselby/puzzle-prelaunch-preset
```

---

This starter template comes with the following.

- [Tailwind CSS V1.0](https://tailwindcss.com) pre-installed and configured
- [Purgecss](https://www.purgecss.com/) to remove unused selectors from your CSS, resulting in smaller CSS files
- A script that automatically generates a `sitemap.xml` file
- A custom 404 page
- A basic Mailchimp email capture form

---

### Configuring Mailchimp Form

First, create a list in Mailchimp. Then, create an embedded form and copy on the `action` from the generated form.

Now head to `config.php` in your project root and paste the `action` into the `mailchimpFormUrl`.

Build your site and you should be good to go.

