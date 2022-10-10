<template>
	<ion-app>
		<ion-router-outlet v-slot="{ Component }">
			<Suspense>
				<div>
					<component :is="Component" />
				</div>
			</Suspense>
		</ion-router-outlet>
	</ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
	components: {
		IonApp,
		IonRouterOutlet,
	},
});
</script>
