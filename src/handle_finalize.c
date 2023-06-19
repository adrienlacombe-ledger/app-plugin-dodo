#include "dodo_plugin.h"

void handle_finalize(void *parameters) {
    ethPluginFinalize_t *msg = (ethPluginFinalize_t *) parameters;
    context_t *context = (context_t *) msg->pluginContext;

    PRINTF("handle finalize\n");

    if (context->valid) {
        if (context->selectorIndex == SWAP_WETH9_DEPOSIT) {
            msg->numScreens = 2;
            msg->tokenLookup1 = context->token_pay;
            msg->tokenLookup2 = context->token_received;
        } else {
            msg->result = ETH_PLUGIN_RESULT_ERROR;
        }
        msg->uiType = ETH_UI_TYPE_GENERIC;
        msg->result = ETH_PLUGIN_RESULT_OK;
    } else {
        PRINTF("Invalid context\n");
        msg->result = ETH_PLUGIN_RESULT_FALLBACK;
    }
}
