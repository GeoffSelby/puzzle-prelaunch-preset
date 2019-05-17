@extends('_layouts.master')

@section('body')

    <div class="md:w-3/5">
        <h3 class="text-lg font-medium md:font-bold text-indigo-500">COMING SOON</h3>
        <h1 class="text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-2">
            Stay on track,<br>
            Get stuff done with <span class="text-indigo-700">Puzzle</span>
        </h1>

        <h2 class="text-lg lg:text-xl xl:text-2xl text-gray-700 mb-6">
            Getting started has never been easier than with Puzzle Prelaunch Preset.
        </h2>

        <p class="mb-4 md:w-3/4 xl:text-lg text-gray-800 leading-tight">
            Get users to sign up for udates prelaunch to <strong>boost launch day sales</strong>!
        </p>

        <div id="mc_embed_signup">
            <form action="{{ $page->mailchimpFormUrl }}" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate w-full sm:w-3/4" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll" class="flex w-full rounded-lg">
                    <div class="mc-field-group flex-1">
                        <label for="mce-EMAIL" class="hidden">Email Address </label>
                        <input type="email" value="" name="EMAIL" class="required email h-12 p-4 rounded-l-lg w-full shadow-lg" id="mce-EMAIL" placeholder="Email address">
                    </div>
                    <div id="mce-responses" class="clear">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_25582686a9fc051afd5453557_189578c854" tabindex="-1" value=""></div>
                    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button bg-indigo-500 h-12 px-4 lg:px-8 xl:px-12 shadow-lg rounded-r-lg text-indigo-200"></div>
                </div>
            </form>
        </div>
    </div>
    
    <div class="md:w-2/5 mb-4 md:mb-0">
        <img src="/assets/images/illustration-sample.png" alt="Illustration Sample">
    </div>

@endsection

@push('scripts')
    <script src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
    <script>(function($) {
        window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
    </script>
@endpush
